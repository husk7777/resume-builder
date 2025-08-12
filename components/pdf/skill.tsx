import { Text, StyleSheet, View } from '@react-pdf/renderer';
import { Skill } from '@/app/lib/definitions';

const styles = StyleSheet.create({
  name:{
    fontWeight: 700,
    color: '#03156e'
  },
  columns:{
    flexDirection: 'row',
  },
  left:{
    flexGrow: 1,
    marginRight: 16,
    width:"55%"
  },
  right:{
    flexGrow:1,
    width:'40%'
  }
});
export const SkillNode:React.FC<Skill> = ({ name, yearsExperience }) => {
  return (
    <View style={styles.columns}>
      <Text style={ [styles.name, styles.left] }>{name} </Text>
      <Text style={styles.right}>{yearsExperience} Years Experience</Text>
    </View>
  );
};