# jQuery Clearable Input Plugin

The jQuery Clearable Input Plugin is a lightweight and customizable solution that enhances the user experience by adding a convenient clear button to input fields. This plugin is particularly useful when dealing with grouped input fields, such as those representing customer details like name, ID, and address. With a single click, users can clear the main input field and optionally define additional inputs to be cleared simultaneously.

## Features

- **Clearable Icon:** An intuitive 'X' icon is dynamically added next to the input field, providing users with a clear visual cue for clearing the content.

- **Grouped Input Support:** Perfect for scenarios where multiple inputs are grouped together, such as customer details, enabling users to clear the entire group in one click.

- **Customizable:** Easily integrate the plugin into your project with customizable options. You can specify a selector for identifying clearable input elements and define additional inputs to clear along with the main input.

## Usage

1. Include jQuery and the Clearable Input Plugin in your project:
    ```html
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="jquery.clearableinput.js"></script>
    <link href="clearableinput.css" rel="stylesheet" type="text/css" />
    ```

2. Apply the plugin to your input fields:
    
    ```javascript
    // Example usage
    $('input.clearable-input').clearableInput();
    ```

3. Enjoy the enhanced user experience with clearable input fields!

Options

- **selector (default: 'input.clearable-input'):** Specify a custom selector for identifying clearable input elements.

- **clear_items (default: []):** An array of IDs representing additional inputs to be cleared along with the main input. Useful for clearing grouped input fields.

## Examples
Scenario 1: Group of items with attribute: "data-clrgrp" & class name: clearable-input
```html
    <input id="customername" type="text" class="clearable-input" data-clrgrp="customer_data" />
    <input id="customerid" type="hidden" data-clrgrp="customer_data" />
    <textarea id="customeraddress" type="hidden" data-clrgrp="customer_data"></textarea>
```
```javascript
    $('input.clearable-input').clearableInput();
```

![Scenario 1](https://github.com/nalindaDJ/clearableInput/blob/main/s1.png?raw=true)

Scenario 2: User defined inputs
```html
    <input id="customername" type="text" class="clearable-input"  />
    <input id="customerid" type="hidden"  />
    <div id="customeraddress"></div>
```
```javascript
    $('#customername').clearableInput({
        clear_items: ['customername', 'customerid','customeraddress']
    });
```
![Scenario 2](https://github.com/nalindaDJ/clearableInput/blob/main/s2.png?raw=true)

## Contributing

Contributions are welcome! Feel free to contribute to the development of this plugin by reporting issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

This jQuery Clearable Input Plugin is released under the [MIT License](LICENSE).

