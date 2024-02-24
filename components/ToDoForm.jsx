import {View, TextInput, Button} from 'react-native';
import styles from '../App';
import {useState} from 'react';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handlePress = () => {
    addTask(taskText)
    setTaskText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handlePress} />
    </View>
  );
};

export default ToDoForm;
