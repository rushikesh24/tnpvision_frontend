import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ViewMore from './Data Visualization/VisualizationDialog';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
function Cards(props) {

  const { classes } = props;
  /*var cardStyle = {
    display: 'block',
    width: '10vw',
    transitionDuration: '0.3s',
    height: '15vw'
  }*/
    return (
    
    <div>
      <Card /*style={cardStyle}*/ className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Dashboard Component {props.number}
          </Typography>
          {props.children}
        </CardContent>
        <CardActions>
          {/*<Button size="small">View</Button>*/}
          <ViewMore>
          {props.children}
          </ViewMore>
        </CardActions>
      </Card>
    </div>
    )
}

/*Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(Cards);
