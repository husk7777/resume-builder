import { Text, View, Link, Image, StyleSheet } from '@react-pdf/renderer';

import { IconText } from './icons';
import { Person } from '@/app/lib/definitions';
import { Conditional } from '../conditional';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: '#03156e'
  },
  subTitle: {
    fontSize: 16,
    marginTop: 2,
    color: '#0847c4',
    fontWeight: 700,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  link: {
    marginRight: 16,
    textDecoration: 'none',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
    width: 100,
    height: 100,
  },
  image: {
    borderRadius: 99999,
  },
});


export const Heading: React.FC<Person> = 
({ 
    familyName,
    givenName,
    dateOfBirth,
    emailAddress,
    phoneNumber,
    location,
    about,
    title,
    skills,
    positions,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{`${givenName} ${familyName}`}</Text>
        <Text style={styles.subTitle}>{title}</Text>
        <View style={styles.infoContainer}>
          <Link src={`mailto:${emailAddress}`} style={styles.link}>
            <IconText icon='at' text={emailAddress} />
          </Link>
        <Conditional showWhen={phoneNumber != null}>
            <IconText icon='phone' text={phoneNumber??""} />
        </Conditional>
        <Conditional showWhen={location != null}>
          <IconText
            icon='location'
            text={location??""}
          />
        </Conditional>
        </View>
      </View>
    </View>
  );
};