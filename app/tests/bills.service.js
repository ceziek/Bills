describe('BillsService', function() {
    beforeEach(module('app'));

    var BillsService;


    beforeEach(inject(function (_BillsService_) {
        BillsService = _BillsService_;
    }));
/*
    describe('Init state', function() {
        it('Bills should be empty array', function() {
            var bills = BillsService.getBills()

            expect(bills === billsFromLS).toEqual([]);
        });
    });


    describe('Add item', function() {
        it('Bills lenght should be 1', function() {
            var bills;
            BillsService.addItem({});

            bills = BillsService.getBills();

            expect(bills.length).toEqual(1);
        });
    });*/

    describe('Point', function() {
        it('Point creation', function() {
            var a = new Point();

            expect(a.x === 0 && a.y === 0).toEqual(true);
        });

        it('Point creation', function() {
            var a = new Point(100, 200);

            expect(a.x === 100 && a.y === 200).toEqual(true);
        });

        it('Point creation', function() {
            var a = new Point(null, undefined);

            expect(a.x === 0 && a.y === 0).toEqual(true);
        });

        it('Point creation', function() {
            var a = new Point("  ", undefined);

            expect(a.x === 0 && a.y === 0).toEqual(true);
        });

        it('Vector from 2 points', function() {
            var a = new Point(0, 0);
            var b = new Point(0, 5);

            var v = new Vector(a, b);

            expect(v.x === 0 && x.y === 5).toEqual(true);
        });
    });
});