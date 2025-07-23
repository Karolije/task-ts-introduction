
type ProductTuple = [name: string, category: string, price: number, isAvailable: boolean, sales: number];


let products: ProductTuple[] = [
    ["Smartfon", "Elektronika", 3000, true, 11],
    ["Laptop", "Elektronika", 6000, false, 15],
    ["T-shirt", "Odzież", 50, true, 13],
    ["Bluza", "Odzież", 150, false, 99],
    ["Lodówka", "AGD", 2000, true, 22],
  ];

  function getAvailableProducts(): ProductTuple[] {
    return products.filter(prod => prod[3])
  }

  console.log(getAvailableProducts())

  function getProductsByCategory(category: string): ProductTuple[] {
    return products.filter(product => product[1] === category)
  }

  console.log(getProductsByCategory("Elektronika"));


  function getAveragePriceByCategory(category: string): number {
  let productsByCategory = products.filter(product => product[1] === category)
  if (productsByCategory.length === 0) {
    return 0; 
  }
  const total = productsByCategory.reduce((sum, product) => sum + product[2], 0);
  return total / productsByCategory.length;
  }
  console.log(getAveragePriceByCategory("Elektronika"));


  const sortIndexMap = {
    name: 0,
    price: 2,
    sales: 4
  };


  function sortProducts(
    category: string,
    sortBy: "name" | "price" | "sales",
    direction: "asc" | "desc"
  ): ProductTuple[] {
    const filtered = products.filter(product => product[1] === category);
  const index = sortIndexMap[sortBy];
  
  return filtered.sort((a, b) => {
    const aValue = a[index];
    const bValue = b[index];
    if (typeof aValue === "string" && typeof bValue === "string") {
        if (direction === "asc") {
          if (aValue > bValue) return 1;
          if (aValue < bValue) return -1;
          return 0;
        } else {
          if (aValue < bValue) return 1;
          if (aValue > bValue) return -1;
          return 0;
        }
      }
      

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0; 
  });
}

  console.log(sortProducts("Elektronika","name", "asc"));
