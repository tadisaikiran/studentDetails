"use strict";
var testing_1 = require("@angular/core/testing");
var contact_form_component_1 = require("./contact-form.component");
describe('ContactFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [contact_form_component_1.ContactFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(contact_form_component_1.ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-form.component.spec.js.map