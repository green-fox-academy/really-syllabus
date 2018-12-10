declare function require(path:string): any;
const test = require('tape');
import { List } from './index';

test('initial empty array', t => {
    let l = new List();
    t.deepEqual( [], l.getList() );
    t.end();
});

test('add 1 item', t => {
    let l = new List();
    l.add('Csoki');
    t.deepEqual( ['Csoki'], l.getList() );
    t.end();
});

test('new item first', t => {
    let l = new List();
    l.add('Csoki');
    l.add('Sor');
    t.deepEqual( ['Sor','Csoki'], l.getList() );
    t.end();
});

test('select element by index', t => {
    let l = new List();
    l.add('Csoki');
    l.add('Sor');
    t.equal('Csoki', l.getItem(1));
    t.end();
});

test('duplication', t => {
    let l = new List();
    l.add('Csoki');
    l.add('Sor');
    l.add('Csoki');
    t.deepEqual(l.getList(),['Csoki', 'Sor']);
    t.end();
});

test('null insertion', t => {
    let l = new List();
    l.add('');
    t.deepEqual(l.getList(),[]);
    t.end();
});

test('list overflow 1', t => {
    let l = new List();
    l.add('cica');
    l.add('macska');
    l.add('kutya');
    l.add('roka');
    t.deepEqual(l.getList(),['roka','kutya','macska'] );
    t.end();
});

test('list overflow 2', t => {
    let l = new List();
    l.add('cica');
    l.add('macska');
    l.add('kutya');
    l.add('cica');
    t.deepEqual(l.getList(),['cica','kutya','macska'] );
    t.end();
});