import { Entity, Fields } from 'remult';

@Entity('transactions', {
    allowApiCrud: true,
})
export class Transaction {
    @Fields.autoIncrement()
    id = 0;
    @Fields.string()
    type = "";
    @Fields.string()
    name = "";
    @Fields.number()
    amount = 0;
    @Fields.date()
    date = "";
}
