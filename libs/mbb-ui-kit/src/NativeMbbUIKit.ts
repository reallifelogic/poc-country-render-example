import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type Spec = TurboModule;

export default TurboModuleRegistry.getEnforcing<Spec>('MbbUIKit');
