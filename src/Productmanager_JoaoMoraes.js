/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} thumbnail
 * @property {string} code
 * @property {number} stock
 */

/**
 * @throws {Error}
 */

/**
 *  @constant
 *  @default
 */


class ProductManager {
  /**
   * @type {Array<Product>}
   */
  #products;

  constructor() {
    this.#products = [];
    this.nextId = 1;
  }
  /** @returns {Array<Product>} */
  getProducts() {
    return this.#products;
  }
  /**
   * @param {number} id El identidicador del producto
   * @param {string} title El nombre del producto
   * @param {string} description La descripción del producto
   * @param {number} price El precio del producto
   * @param {string} thumbnail El enlace a la imagen del producto
   * @param {string} code El código único del producto
   * @param {number} stock La cantidad del producto
   */
  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.#products.some(product => product.code === code)) {
      console.log("El código de producto ya existe. No se pudo agregar el producto.");
      return;
  }

    /** @type {Product} */
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    product.id = this.nextId++;
    this.#products.push(product);
    console.log("Producto agregado:", product);
  }

  /**
   *
   * @param {number} idProduct El id del producto
   */
  getProductById(idProduct) {
    const product = this.#products.find((product) => product.id === idProduct);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }
}

//------

const productManager = new ProductManager();

// Ejemplo de uso

productManager.addProduct("Camisa", "Camisa de algodón", 20, "camisa.jpg", "ABC123", 50);
productManager.addProduct("Pantalón", "Pantalón de mezclilla", 30, "pantalon.jpg", "XYZ789", 30);
productManager.addProduct("Camisa", "Camisa de algodón", 20, "camisa.jpg", "ABC123", 50); // Intento de agregar un producto con el mismo código

console.log("Todos los productos:", productManager.getProducts());
console.log("Producto con ID 2:", productManager.getProductById(2)); // Producto existente
console.log("Producto con ID 5:", productManager.getProductById(5)); // Producto no encontrado
