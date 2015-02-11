KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('vc-pagination', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/vc-pagination/1.0.0/']});