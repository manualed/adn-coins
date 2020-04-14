import { browser, by, element, protractor } from "protractor";

export class CoinsPage {

  constructor() {}

  private createEmployee = element(by.xpath('/html/body/app-root/div/app-employee-list/div/div/div/button'));
  private save =  element(by.xpath('/html/body/app-root/div/app-employee/div/div/form/div/div/button'));

  createEmployeeButtonClick() { 
    this.createEmployee.click(); 
  }
  saveEmployeeButtonClick() { 
    this.save.click(); 
  }
  insertaTipoDocumento(value: string) {
    element(by.css('[name="tipoDocumento"]')).sendKeys(value);
  }
  insertaDocumento(value: string) {
    element(by.css('[name="numeroDocumento"]')).sendKeys(value);
  }
  insertaNombre(value: string) {
    element(by.css('[name="nombre"]')).sendKeys(value);
  }
  insertaApellido(value: string) {
    element(by.css('[name="apellido"]')).sendKeys(value);
  }
  insertaEmail(value: string) {
    element(by.css('[name="email"]')).sendKeys(value);
  }
  insertaFechaNacimiento(value: string) {
    element(by.css('[name="fechaNacimiento"]')).sendKeys(value);
  }
  insertaFechaIngreso(value: string) {
    element(by.css('[name="fechaIngreso"]')).sendKeys(value);
  }
  insertaFechaCreacion(value: string) {
    element(by.css('[name="fechaIngreso"]')).sendKeys(value);
  }

  getTipoDocumento() {
    return element(by.css('[name="tipoDocumento"]')).getText(); 
  }
  getDocumento() {
    return element(by.css('[name="numeroDocumento"]')).getText();
  }
  getNombre() {
    return element(by.css('[name="nombre"]')).getText();
  }
  getApellido() {
    return element(by.css('[name="apellido"]')).getText();
  }
  getEmail() {
    return element(by.css('[name="email"]')).getText();
  }
  getFechaNacimiento() {
    return element(by.css('[name="fechaNacimiento"]')).getText();
  }
  getFechaIngreso() {
    return element(by.css('[name="fechaIngreso"]')).getText();
  }
  getFechaCreacion() {
    return element(by.css('[name="fechaIngreso"]')).getText();
  }


  navigateTo() {
    return browser.get("/");
  }

  getTitle() {
    return element(by.css("app-root a")).getText();
  }

  getEmpleadosButton() {
    return element(by.css('[routerlink="/employees/employee-list"]'));
  }

  getEmpleadosButtonOnClick() {
    return element(by.css("app-employee-list div div")).getText();
  }


  getBonificacionesOption() {
    return element(by.css('[routerlink="/bonuses/bonus-list"]'));
  }
  getTransaccionesOption() {
    return element(by.css('[routerlink="/transactions/transaction-list"]'));
  }

}
