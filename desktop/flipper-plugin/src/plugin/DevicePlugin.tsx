/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {SandyPluginDefinition} from './SandyPluginDefinition';
import {BasePluginInstance, BasePluginClient} from './PluginBase';
import {FlipperLib} from './FlipperLib';
import {Atom, ReadOnlyAtom} from '../state/atom';
import {DeviceOS, DeviceType, DeviceLogEntry, CrashLog} from 'flipper-common';

export type DeviceLogListener = (entry: DeviceLogEntry) => void;
export type CrashLogListener = (crash: CrashLog) => void;

export interface Device {
  readonly isArchived: boolean;
  readonly isConnected: boolean;
  readonly os: DeviceOS;
  readonly serial: string;
  readonly deviceType: DeviceType;
  readonly connected: Atom<boolean>;
  executeShell(command: string): Promise<string>;
  addLogListener(callback: DeviceLogListener): Symbol;
  addCrashListener(callback: CrashLogListener): Symbol;
  removeLogListener(id: Symbol): void;
  removeCrashListener(id: Symbol): void;
  executeShell(command: string): Promise<string>;
  forwardPort(local: string, remote: string): Promise<boolean>;
  clearLogs(): Promise<void>;
  sendMetroCommand(command: string): Promise<void>;
  navigateToLocation(location: string): Promise<void>;
  screenshot(): Promise<Uint8Array>;
}

export type DevicePluginPredicate = (device: Device) => boolean;

export type DevicePluginFactory = (client: DevicePluginClient) => object;

export interface DevicePluginClient extends BasePluginClient {
  /**
   * opens a different plugin by id, optionally providing a deeplink to bring the plugin to a certain state
   */
  selectPlugin(pluginId: string, deeplinkPayload?: unknown): void;

  readonly isConnected: boolean;
  readonly connected: ReadOnlyAtom<boolean>;
}

export class SandyDevicePluginInstance extends BasePluginInstance {
  static is(thing: any): thing is SandyDevicePluginInstance {
    return thing instanceof SandyDevicePluginInstance;
  }

  /** client that is bound to this instance */
  readonly client: DevicePluginClient;

  constructor(
    flipperLib: FlipperLib,
    definition: SandyPluginDefinition,
    device: Device,
    pluginKey: string,
    initialStates?: Record<string, any>,
  ) {
    super(flipperLib, definition, device, pluginKey, initialStates);
    this.client = {
      ...this.createBasePluginClient(),
      selectPlugin(pluginId: string, deeplink?: unknown) {
        flipperLib.selectPlugin(device, null, pluginId, deeplink);
      },
      get isConnected() {
        return device.connected.get();
      },
      connected: device.connected,
    };
    this.initializePlugin(() =>
      definition.asDevicePluginModule().devicePlugin(this.client),
    );
  }

  toJSON() {
    return '[SandyDevicePluginInstance]';
  }
}
