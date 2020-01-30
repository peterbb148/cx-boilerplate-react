import React from 'react';
import styles from './root.module.scss';
import NavBar from '../NavBar';
import Container, {PADDING, DIRECTION} from '../Container';
import Card, { HEIGHT_RULES, WIDTH_RULES } from '../Card';
import MainMenu from '../MainMenu';
import Text, { SIZES, TEXTCOLOR } from '../Text';
import { TEXTLABELS } from '../../demo_content/text';
import { CARDS_DEMO } from '../../demo_content/cards';
import Spacing, { MARGINS } from '../Spacing';
import Divider from '../Divider';
import Button from '../Button';

export interface RootProps {

}

const Root:React.FC<RootProps> = (props:RootProps) => (
  <div className={styles.container}>
    <NavBar />
    <MainMenu />
    <Container direction={DIRECTION.VERTICAL} fullWidth>
      <Text size={SIZES.LARGE} bold>{TEXTLABELS.title}</Text>
      <Text size={SIZES.SMALL} color={TEXTCOLOR.GREY}>{TEXTLABELS.subtitle}</Text>
      <Spacing size={MARGINS.HUGE} />
      <Container padding={PADDING.NONE}>
        {
          CARDS_DEMO.map(card => (
            <Card height={HEIGHT_RULES.SMALL} width={card.cta && card.cta.type !== 'secondary' ? WIDTH_RULES.MEDIUM : WIDTH_RULES.SMALL}>
              <Container padding={PADDING.SMALL} direction={DIRECTION.VERTICAL} fullWidth fullHeight>
                <Text color={TEXTCOLOR.GREY_MID}>{card.title}</Text>
                <Spacing size={MARGINS.SMALL} />
                <Text size={SIZES.TINY} color={TEXTCOLOR.GREY}>{card.description}</Text>
                { card.cta && (
                  <Button 
                    onClick={(event) => window.open(card.cta.destination, '_blank') }
                    secondary={card.cta.type === 'secondary' } 
                    right 
                    fullWidth 
                    bottom
                  >
                    {card.cta.label}
                  </Button> 
                )}
              </Container>
            </Card>
          ))
        }
      </Container>
      <Spacing size={MARGINS.MEDIUM} />
      <Card height={HEIGHT_RULES.LARGE} width={WIDTH_RULES.FULL}>
        <Container padding={PADDING.SMALL} direction={DIRECTION.VERTICAL}>
          <Text size={SIZES.LARGE} color={TEXTCOLOR.GREY_MID}>{TEXTLABELS.card_title}</Text>
        </Container>
        <Divider />
      </Card>
    </Container>
  </div>
)

export default Root;
