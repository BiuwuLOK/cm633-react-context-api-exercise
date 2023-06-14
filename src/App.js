import React from "react";
import "./App.css";

import ListItem from "./ListItem";

class App extends React.Component {
  state = {
    products: ["iPhone", "iPad", "Mac", "Apple TV", "HomePod"],
    productSelect: [],
  };

  productSelectHandler = (product) => {
    // console.log(product);
    const newProductSelected = [...this.state.productSelect];

    if (newProductSelected.includes(product)) {
      //
      newProductSelected = this.state.productSelect.filter((productArr) => {
        return productArr !== product;
      });
    } else {
      //
      newProductSelected.push(product);
    }
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>

            <ul className="mt-4 flex flex-col gap-y-3">
              {this.state.products.map((product) => (
                <ListItem
                  title={product}
                  active={this.state.productSelect.includes}
                  onSelect={this.productSelectHandler}
                ></ListItem>
              ))}
            </ul>

            <p className="mt-3 text-slate-400 text-sm">2 item(s) selected</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">iPhone, Mac</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
