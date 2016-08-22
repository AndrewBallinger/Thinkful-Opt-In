/*global describe beforeEach inject it expect*/
describe('optIn', () => {
  var scope, element, compiled, html, image;

  beforeEach(module("optApp"));
  beforeEach(module("opt-in-template.html"));
  beforeEach(inject( ($rootScope, $compile) => {
    scope = $rootScope.$new();
    image = "This is definitely a picture";
    html = "<opt-in>" + image + "</opt-in>";

    compiled = $compile(html);
    element = compiled(scope);

    scope.$digest();
  }));

  it('should render the element correctly', () => {
    expect(element.html()).toContain(image); //Note, that if image contains a tag it gets mangled a little...

    expect(element.find('input .first-name[required]')).toBeTruthy();
    expect(element.find('input .last-name[required]')).toBeTruthy();
    expect(element.find('input .email[required]')).toBeTruthy();
    expect(element.find('button')).toBeTruthy();
  });
  

});
