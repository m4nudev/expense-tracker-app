import { TextInput, View, Text, Keyboard } from "react-native";
import Input from "./Input"

function ExpenseForm() {
    function amountChangeHandler() { }

    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onchangeText: amountChangeHandler
        }} />
        <Input label="Date" textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onchangeText: () => { }
        }} />
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCapitalize: 'none'
            //autoCorrect: false // default is true
        }} />
    </View>
}

export default ExpenseForm;