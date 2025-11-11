import * as migration_20251111_001318_initial_schema from './20251111_001318_initial_schema';

export const migrations = [
  {
    up: migration_20251111_001318_initial_schema.up,
    down: migration_20251111_001318_initial_schema.down,
    name: '20251111_001318_initial_schema'
  },
];
