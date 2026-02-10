import { IIdGenerator } from 'src/core/ports/id-generator.interface';

export class RealIdGenerator implements IIdGenerator {
  generate() {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
