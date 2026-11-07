export const money = (cents) => new Intl.NumberFormat('en-GB', {style:'currency',currency:'GBP'}).format(cents / 100);
export function summarize(rows, month) {
  const selected = rows.filter(r => r.date.startsWith(month));
  const income = selected.reduce((s,r)=>s + Math.max(0,r.amount),0);
  const expenses = selected.reduce((s,r)=>s - Math.min(0,r.amount),0);
  return {income,expenses,net:income-expenses};
}
export function filterTransactions(rows, query='', direction='all') {
  return rows.filter(r => `${r.name} ${r.category} ${r.id}`.toLowerCase().includes(query.toLowerCase()) && (direction==='all' || (direction==='in' ? r.amount > 0 : r.amount < 0)));
}
export function recordPayment(rows, balance, recipient, amount) {
  if (!recipient.trim() || !Number.isSafeInteger(amount) || amount <= 0 || amount > balance) throw new Error('Enter a recipient and an amount within your available balance.');
  return [{id:crypto.randomUUID(),name:recipient.trim(),amount:-amount,date:'2026-11-07',category:'Payment',status:'Completed',initials:recipient.trim().slice(0,2).toUpperCase()},...rows];
}
export const initialTransactions = [
 {id:'TX-2048',name:'Linear Studio',initials:'L',amount:480000,date:'2026-11-07',category:'Client payment',status:'Completed'},
 {id:'TX-2047',name:'Figma',initials:'F',amount:-4500,date:'2026-11-07',category:'Software',status:'Completed'},
 {id:'TX-2046',name:'Notion Labs',initials:'N',amount:-2400,date:'2026-11-06',category:'Software',status:'Completed'},
 {id:'TX-2045',name:'Alex Morgan',initials:'AM',amount:-125000,date:'2026-11-06',category:'Contractors',status:'Completed'},
 {id:'TX-2044',name:'Layers Agency',initials:'LA',amount:325000,date:'2026-11-05',category:'Client payment',status:'Completed'},
 {id:'TX-2043',name:'The Office Group',initials:'TO',amount:-180000,date:'2026-11-04',category:'Workspace',status:'Completed'},
 {id:'TX-2042',name:'Vercel',initials:'V',amount:-2000,date:'2026-11-03',category:'Software',status:'Completed'},
 {id:'TX-2041',name:'Goodkind Co.',initials:'G',amount:620000,date:'2026-11-02',category:'Client payment',status:'Completed'},
 {id:'TX-2040',name:'Studio payroll',initials:'SP',amount:-425000,date:'2026-11-01',category:'Payroll',status:'Completed'},
 {id:'TX-2039',name:'October client work',initials:'OC',amount:2835000,date:'2026-10-28',category:'Client payment',status:'Completed'},
 {id:'TX-2038',name:'October operations',initials:'OO',amount:-1784000,date:'2026-10-28',category:'Operations',status:'Completed'}
];
export const initialInvoices = [
 {id:'INV-0081',client:'Orbit Digital',initials:'OD',description:'Website design · milestone 2',amount:420000,due:'2026-11-04',status:'Overdue'},
 {id:'INV-0082',client:'Morrow Studio',initials:'MS',description:'Brand identity project',amount:280000,due:'2026-11-10',status:'Pending'},
 {id:'INV-0083',client:'Forma & Field',initials:'FF',description:'November design retainer',amount:350000,due:'2026-11-14',status:'Pending'},
 {id:'INV-0080',client:'Linear Studio',initials:'L',description:'Product design sprint',amount:480000,due:'2026-11-07',status:'Paid'},
];
export const monthlyFlow = [
 {name:'Jun',income:21400,expenses:15200}, {name:'Jul',income:26800,expenses:17400},
 {name:'Aug',income:23900,expenses:16100}, {name:'Sep',income:31200,expenses:19800},
 {name:'Oct',income:28350,expenses:17840}
];
