import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import { Heading } from './heading';
import { Section } from './section';
import { Experience } from './position';
import { Education } from './education';
import { SkillNode } from './skill';
import { Person } from '@/app/lib/definitions';
import { Position } from '@/app/lib/definitions';
import { Watermark } from './watermark';

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
  },
  twoColumn: {
    flexDirection: 'row',
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  right: {
    flexGrow: 1,
    width: '40%',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 24,
    left: 0,
    right: 35,
    textAlign: 'right',
    color: '#64748b',
  },
  paragraph:{
    marginBottom:5
  }
});

type ResumeDocumentProps = {
  person: Person;
};

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ person }) => {

    var professionalPositions:Position[] = [];
    var volunteerPositions:Position[] = [];
    person.positions.forEach((p)=>{
        if(p.type == 1) professionalPositions.push(p);
        if(p.type == 2) volunteerPositions.push(p);
    })
    professionalPositions.sort(function(a,b){
        return b.startDate.getTime() - a.startDate.getTime();
    })
    volunteerPositions.sort(function(a,b){
        return b.startDate.getTime() - a.startDate.getTime();
    })
    person.skills.sort(function(a,b){
        return b.yearsExperience - a.yearsExperience;
    })
    var aboutParagraphs = person.about.split("<break>");
  return (
    <Document
      author= {`${person.givenName} ${[person.familyName]}`}
      title={`Resume for ${person.givenName} ${person.familyName}, ${new Date().getFullYear()}`}
    >
      <Page size='A4' style={styles.page}>
        <Heading {...person} />
        <Section title='About Me'>
            {aboutParagraphs.map((a)=>(
                <Text key={a} style={styles.paragraph}>{a}</Text>                
            ))}
        </Section>
        <Text break></Text>
        <Section title='professional experience'>
          {professionalPositions.map((p) => (
            <Experience key={p.id} {...p} />
          ))}
        </Section>
        <Text break></Text>
        <Section title='volunteer experience'>
          {volunteerPositions.map((p) => (
            <Experience key={p.id} {...p} />
          ))}
        </Section>
            <Section title='education'>
              {person.qualifications.map((e) => (
                <Education key={e.id} {...e} />
              ))}
            </Section>
        <Section title='skills'>
          {person.skills.map((s) => (
            <SkillNode key={s.name} {...s} />
          ))}
        </Section>
        <Text
          fixed
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
        <Watermark></Watermark>
      </Page>
    </Document>
  );
};