import { browser, logging, protractor } from "protractor";
import { CoinsPage } from "../pages/coins.po";

describe("Coins App Aplication", () => {
  let page: CoinsPage;

    const tipoDocumento = 'CC'; 
    const numeroDocumento = '898289734';
    const nombre = 'MIGUEL';	
    const apellido = 'CEBALLOS';
    const email = 'migue@dot.com';
    const fechaNacimiento = '01-01-2000';
    const fechaIngreso = '01-01-2020';
    const fechaCreacion = '01-01-2020';

  beforeEach(() => {
    page = new CoinsPage();
  });

  it("debe tener titulo", () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual("Coins App");
  });

  it("debe mostrar el boton empleados", () => {
    page.navigateTo();
    expect(page.getEmpleadosButton().getText()).toEqual("Empleados");
  });

  it("debe mostrar el titulo empleados", () => {
    page.navigateTo();
    page.getEmpleadosButton().click();
    expect(page.getEmpleadosButtonOnClick()).toEqual("Empleados");
  });
  it('Inserta Empleado', () => {
    browser.waitForAngular();
    page.createEmployeeButtonClick();
    page.insertaTipoDocumento(tipoDocumento);
    page.insertaDocumento(numeroDocumento);
    page.insertaNombre(nombre);
    page.insertaApellido(apellido);
    page.insertaEmail(email);
    page.insertaFechaNacimiento(fechaNacimiento);
    page.insertaFechaIngreso(fechaIngreso);
    page.insertaFechaCreacion(fechaCreacion);
    //page.saveEmployeeButtonClick();
  });

  it("debe mostrar el boton crear empleados", () => {
    browser.waitForAngular();
    page.createEmployeeButtonClick();
    page.insertaTipoDocumento(tipoDocumento);
    page.insertaDocumento(numeroDocumento);
    page.insertaNombre(nombre);
    page.insertaApellido(apellido);
    page.insertaEmail(email);
    page.insertaFechaNacimiento(fechaNacimiento);
    page.insertaFechaIngreso(fechaIngreso);
    page.insertaFechaCreacion(fechaCreacion);
    page.saveEmployeeButtonClick();
    browser.sleep(1000);
    expect(page.getTipoDocumento()).toEqual(tipoDocumento);
    expect(page.getDocumento()).toEqual(numeroDocumento);
    expect(page.getNombre()).toEqual(nombre);
    expect(page.getApellido()).toEqual(apellido);
    expect(page.getEmail()).toEqual(email);
    expect(page.getFechaNacimiento()).toEqual(fechaNacimiento);
    expect(page.getFechaIngreso()).toEqual(fechaIngreso);
    
  });

//   it("debe mostrar el boton crear empleados", () => {
//     page.navigateTo();
//     // browser.wait(protractor.ExpectedConditions.elementToBeClickable(page.getCrearEmpleadoButton()), 20000)
//     // .then(function(){
//     //     page.getCrearEmpleadoButton().getText();
//     // })
//     browser.driver.wait(function () {
//       return page
//         .getCrearEmpleadoButton()
//         .isDisplayed()
//         .then(function (IsVisible) {
//           return IsVisible;
//         });
//     }, 10000);
//     expect(page.getCrearEmpleadoButton().getText()).toEqual("Crear Empleado");
//   });

it("debe mostrar el boton bonificaciones", () => {
    page.navigateTo();
    expect(page.getBonificacionesOption().getText()).toEqual("Bonificaciones");
  });

  it("debe mostrar el boton transaccion", () => {
    page.navigateTo();
    expect(page.getTransaccionesOption().getText()).toEqual("Transaccion");
  });

//   it("debe mostrar el boton TRM", () => {
//     page.navigateTo();
//     expect(page.getTRMOption().getText()).toEqual("TRM:");
//   });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
