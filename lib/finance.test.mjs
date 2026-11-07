import test from 'node:test';
import assert from 'node:assert/strict';
import { summarize, filterTransactions, recordPayment } from '../dist/finance.mjs';
const rows = [{id:'1',name:'Client',amount:10001,date:'2026-11-02',category:'Income'}, {id:'2',name:'Software',amount:-2345,date:'2026-11-03',category:'Software'}];
test('cash flow reconciles integer pennies and excludes other months', () => {
  assert.deepEqual(summarize([...rows,{amount:999,date:'2026-10-02'}], '2026-11'), {income:10001,expenses:2345,net:7656});
});
test('search and direction filters combine', () => {
  assert.equal(filterTransactions(rows,'soft','out').length,1);
  assert.equal(filterTransactions(rows,'soft','in').length,0);
});
test('payments cannot exceed balance or be non-positive', () => {
  assert.throws(()=>recordPayment(rows,500,'Supplier',501));
  assert.throws(()=>recordPayment(rows,500,'Supplier',0));
  assert.throws(()=>recordPayment(rows,500,' ',100));
  assert.throws(()=>recordPayment(rows,500,'Supplier',NaN));
  assert.equal(recordPayment(rows,500,'Supplier',200).at(0).amount,-200);
  assert.equal(rows.length,2);
});
