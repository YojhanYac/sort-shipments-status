# Column Sorter

Use the extension to sort the values of two specific columns; through the separator you are using, it will arrange all the text you select.

It only works for texts that have a separator repeated in all lines, and it is also necessary for all lines to have the same number of columns.

## Extension Configuration

Once the extension is installed, we must ensure that the values we need are configured. By default, the values are:

```json
{
    "First_column_to_sort": 7,
    "Second_column_to_sort": 8,
    "Column_separator": ";"
}
```

To configure the values, click on the left gear of the extension and go to "Extension Settings." Inside, you will find the fields to edit according to your needs.

## Usage

Once installed, simply select the text with columns you want to sort and open the VSCode command sequence with "Ctrl + Shift + P." A field will appear for you to type in. Enter "SortStringByColumn" and select it to execute the extension on the selected text.

Optional: You can use the extension using the keyboard combination

Windows: Ctrl + Shift + O
Mac: CMD + SHIFT + O

## Common Errors

If you receive an error when running the extension, check the configuration, as you may have entered a non-existent column or the separation format may not match the default one.