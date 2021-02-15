`warehouse.js`

- prompts number of products available in the given inventory
- prompts what is left in the inventory when a product has been sold, the product and number of sold products is specified as inparameters to the `updateInventory` function
- `updateInventory` assumes that a check has already been made that the number of available articles are in the inventory prior to the sell

How to Execute
--------------
Run `node warehouse.js`

Future Improvement
------------------
- Convert result numbers to strings so that it matches the original data format.
- Handle when the input data is invalid by throwing error or output to debug log with information.
