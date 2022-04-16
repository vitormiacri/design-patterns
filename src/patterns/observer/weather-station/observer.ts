import { Subject } from './subject'

export interface Observer {
  update(observable: Subject): void
}
