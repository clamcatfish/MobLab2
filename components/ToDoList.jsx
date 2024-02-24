import {Pressable, View, Text, ScrollView} from 'react-native';
import styles from '../App';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      <View style={styles.taskBox}>
        {tasks.map((task, index) => (
          <Text style={styles.task} key={index}>: {task}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ToDoList;
