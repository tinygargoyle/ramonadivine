# 3.3 Strings

DataType | Litteral | Conversion
:--------: | :------: | :-------:
`String` | `"text"` | `CStr()`

## Declaration Syntax
```vb
Dim variableName As String
   #--- or ---#
Dim variableName As String = "text"
```

## Examples
* **Input**
```vb
strVar = txtBox.Text(inputText)
```

* **Output(Querying)**
```vb
strCurrentVal = txtBox.Text
```

## Data Type Conversion
###Converting to Type String
```vb
convertedVar = CStr(variable)
```


### Converting to Type Double
```vb
convertedVar = CDbl(txtBox.Text)
```

### Converting to Type Integer
```vb
convertedVar = CInt(txtBox.Text)
```

## Food For Thought:

In Visual Basic, *TextBox* objects can only display *String* data types, *but* the *ListBox* objects can display *any* data type!VB Global Options

==========
==========
==========
==========

# VB Global Options
=========

## Making Visual Basic "strict"
```vb
Option Strict On

Public Class Form1
	
	[...]
	
End Class
```
### What it does
This tells VB to _*not*_ convert datatypes without being explicitly told to.

_Given:_
```vb
Dim dblVar As Double, intVar As Integer
Dim strVar As String
```
~~~`intVar = dblVar`~~~ _instead:_ [convert to integer](#converting-to-type-integer)
~~~`dblVar = strVar`~~~ _instead:_ [convert to double](#converting-to-type-double)
~~~`strVar = intVar`~~~ _instead:_ [convert to string](#converting-to-type-string)

----------
## Making Visual Basic "explicit"
```vb
Option Explicit On

Public Class Form1
	
	[...]
	
End Class
```

==========
==========
==========
==========

### ToString method
```vb
(12345.628).ToString("N1")
# 12,345.6

(12345.628).ToString("C2")
# $12,345.63

(12345.628).ToString("P0")
# 18%
```

---------
# Dates

## Dates as Input and Output


DataType | Litteral | Conversion
:--------: | :------: | :-------:
`Date` | `#7/4/1776#` | `CDate()`


```vb
Dim indDay As Date
Dim d As Date = CDate(txtBox.Text)
Dim indDay As Date = #7/4/1776#
```

--------

### Masked TextBox
**Placeholders:**
digit: `0`
License Plate: `&`
Letter: `L`
[More](file:///Users/ethan/Library/Application%20Support/Dash/DocSets/NET_Framework/NET%20Framework.docset/Contents/Resources/Documents/msdn.microsoft.com/en-us/library/system.windows.forms.maskedtextbox.mask(v=vs.110\).html)

---------

# Debugging

_Fixing logic errors in code_

**Breakpoint** - A pause in the code to wait for the programmer to give it the go-ahead
_To toggle a breakpoint, click in the column to the left of the code window_
_To start, press F5_

## Stepping
**Step in** - ("Single step") F8 arrow down with dot on bottom
**Step out** - arrow up with dot on bottom
**Step over** - arrow down with dot on top

# 4 Conditions
============
 
## Comparison syntax
LT | GT | LToEQ | GToEQ | nEQ | EQ | bool ("Is True")
:--------: | :------: | :-------: | :------: | :------: | :------: | :------:
`<` | `>` | `<=` | `>=` | `<>` | `=` | `[funct that returns bool]`
 
## Bool
```vb
If IsNumeric(txtBox.Text) Then
	'the bool value = true'
End If
```

## "If" structures 
```vb
If intvar1 > intvar2 Then
moo.Text() = action1.Text()
ElseIf altcondition Then
moo.Text() = action2.Text()
End If
```
 ## Selector ("Case") structures
 The case values can be integer, string, etc, but they must be the *SAME* type
 
```vb
Dim position As Int
Select Case position
	Case 1
		txtOutcome.Text = "Gold medalist"
	Case 2
		txtOutcome.Text = "Gold medalist"
	Case 1 to 3
		meep
	Case Is >=4
		moo
	Case Else
 		blah
 	End Select
```

Variables declared inside a selector block is sandboxed to within that scope. This is called *block-level scope*




# 5 General Procedures

[5.1 Function Procedures](#L51-function-procedures)
[...5.1 - Syntax](#mksection-L51---syntax)
[5.2 Sub Procedures, Part I](#L52-sub-procedures--part-i)

============

## 5.1 Function Procedures
[5.1 - Syntax](#mksection-L51---syntax)

### 5.1 - Syntax

The syntax is as follows:
```vb
Function FunctionName(var1 As Type1, var2As Type2, ...) As ReturnDataType
	'magic stuff
	Return magic_output
End Function
```
==========
## 5.2 Sub Procedures, Part I

### 5.2 - Difference between subs and functions
Sub Procedures do not return anything, unlike function
### 5.2 - Example
```vb
Sub DisplaySum(num1 As Double, num2 As Double)
	Dim z As Double
	z = num1 + num2
	lstOutput.Items.Add(z)
End Sub
```
==========

## 5.3 Sub Procedures, Part II

* [Passing by Value](#L53---passing-by-value)
* Passing by reference
* Sub Procedures that Return a Single Value
* Scope and Lifetime of Variables and Constants
* Debugging
==========
### 5.3 - Passing By Value
Byref vs Byval
Byval (default): gets a seperate memory location

* Gets private memory location
* Gets a copy of everything you passed to it
* Everything is local to within the instance
* Think "sandboxed"

### 5.3 - Passing By Reference

* Passes a pointer to the original copy of the variable
* 

```vb
Public Sub btnOne_Click (...) Handles _ btnOne.Click
	Dim num As Double = 4
	Triple(num)
	txtBox.Text = CStr(num)
End Sub

Sub Triple(ByRef num As Double)
	num = 3 * num
End Sub
' Output = "12"
```

## 5.4 Modular Design
==========

# 6 Repetition

## 6.1 Do Loops
========

* Pretest Form of a Do Loop
* Posttest Form of a Do Loop

Pretest

```vb
'pretest loop
Sub hi(...)
Do While condition = 1
	'statement
Loop
End Sub
```
 
PostTest form is the actions done within the loop

```vb
'posttest loop
Do
	statements
Loop Until passWord = "word"
```


## 6.2 For...Next Loop

```vb
Dim i As Integer
For (i = 0 To 10)
'i exists beyond the loop
```

```vb
For (Dim i As Integer = 0 To 10)
'i only exists inside the loop
```

```vb
For i As Integer = 1 To 5
'blah
Next
'The Next statement triggers an increment of 1
```

```vb
For i As Integer = 10 To 1 Step -1
'blah
Next
'The Next statement triggers an increment of the step
```
## 6.3 List Boxes and Loops