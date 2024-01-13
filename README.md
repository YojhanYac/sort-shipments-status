# Column Sorter

Use the extension to sort the values of two specific columns; through the separator you are using, it will arrange all the text you select.

It only works for texts that have a separator repeated in all lines, and it is also necessary for all lines to have the same number of columns.

## Extension Configuration

Once the extension is installed, we must ensure that the values we need are configured. By default, the values are:

```json
{
    "First_column_to_sort": 8,
    "Second_column_to_sort": 9,
    "Column_separator": ";"
}
```

A trick: if you want to sort a single column, set two values with the same value.

```json
{
    "First_column_to_sort": 2,
    "Second_column_to_sort": 2,
    "Column_separator": ";"
}
```

To configure the values, click on the left gear of the extension and go to "Extension Settings." Inside, you will find the fields to edit according to your needs.

## Usage

Once installed, simply select the text with columns you want to sort and open the VSCode command sequence with "Ctrl + Shift + P." A field will appear for you to type in. Enter "SortStringByColumn" and select it to execute the extension on the selected text.

Optional: You can use the extension using the keyboard combination

> Windows: Alt + Ctrl + u

> Mac: Cmd + Ctrl + u

## Example

Input

```
MLB,1960-01-01T12:18:32.411-04:00,delivered,None,SXT117,28,at_station,sorting,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T10:21:50.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T10:18:24.411-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T15:30:40.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T14:13:19.811-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T07:45:05.911-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T15:30:40.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T12:56:54.711-04:00,delivered,None,SXT117,28,at_station,return,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T07:45:05.911-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T10:04:09.811-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T20:52:44.411-04:00,delivered,None,SXT117,28,at_station,sorting,No tiene shipment 2.0 vinculado.
```

Output after using the extension (Columns 8 and 9)

```
MLB,1960-01-01T10:21:50.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T10:18:24.411-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T15:30:40.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T14:13:19.811-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T15:30:40.911-04:00,delivered,None,SXT117,28,at_station,ready_to_deliver,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T12:56:54.711-04:00,delivered,None,SXT117,28,at_station,return,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T07:45:05.911-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T07:45:05.911-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T10:04:09.811-04:00,delivered,None,SXT117,28,at_station,route_cancelled,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T12:18:32.411-04:00,delivered,None,SXT117,28,at_station,sorting,No tiene shipment 2.0 vinculado.
MLB,1960-01-01T20:52:44.411-04:00,delivered,None,SXT117,28,at_station,sorting,No tiene shipment 2.0 vinculado.
```

## Common Errors

If you receive an error when running the extension, check the configuration, as you may have entered a non-existent column or the separation format may not match the default one.

## Buy me a coffee

<a target="_blank" href="https://www.buymeacoffee.com/yojhan"><img src="resources/buymeacoffee.png" alt="Buy me a coffee"></a>