describe("function-domspec", function() {

  beforeEach(function() {
    document.body.innerHTML = window.__html__['index.html'];
  });

  it("li要素は複数追加できるべし", function() {
    window.setTimeout(function(){
      console.log("aaaaa");
      var tbls, tblsCont;
      tbls = document.getElementsByTagName('table');
      tblsCont = tbls.length;
      expect(tblsCont).toEqual(5);
    }, 0);
  });


});
