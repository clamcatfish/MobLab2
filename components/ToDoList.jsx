import {Pressable, View, Text, ScrollView} from 'react-native';
import styles from '../App';

const ToDoList = ({tasks}) => {
  return (
    <ScrollView>
      <View>
        {tasks.map((task, index) => (
          <Text key={index}>: {task}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ToDoList;
