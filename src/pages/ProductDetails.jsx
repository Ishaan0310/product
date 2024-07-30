import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const productImages = [
  'https://m.media-amazon.com/images/I/81HfwTCaMeL._SY425_.jpg', // Replace with actual image paths
  'https://m.media-amazon.com/images/I/81y2--KlUiL._SY425_.jpg',
];
const useStyles = styled((theme) => ({
    dialogPaper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    blurBackground: {
      filter: 'blur(5px)',
    },
  }));
function ProductDetails() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [rating, setRating] = useState(4);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const author = {
    name: 'Emily Chen',
    image: 'data:image/jpeg;base64,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', // Replace with actual image path
    bio: 'Rhonda Byrne is the creator behind The Secret, a documentary film that swept the world in 2006, changing millions of lives and igniting a global movement around the power of manifestation. The following year Rhondas book of The Secret was released, which was translated into 50 languages and remains one of the longest-running bestsellers of this century. Rhonda has written five more bestselling books since, which together form The Secret Book Series: The Power in 2009, The Magic in 2010, Hero in 2013, How The Secret Changed My Life in 2016, The Greatest Secret in 2020, and her latest book, The Secret to Love, Health, and Money: A Masterclass in 2022.',
    link: 'https://www.rhondabyrne.com/',
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 400, maxHeight: 400, mb: 5 }}>
            <CardMedia
              component="img"
              image={mainImage}
              alt="Product"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Card>
          <Box sx={{ display: 'flex', mt: 2 }}>
            {productImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  border: mainImage === image ? '2px solid #000' : '1px solid #ccc',
                  p: 1,
                  cursor: 'pointer',
                  mx: 1,
                }}
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={`Product ${index + 1}`} style={{ width: 50, height: 50 }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 4 }}>
                The Secret
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: 4 }}>
              The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thought alone can influence objective circumstances within one's life. The book alleges energy as assurance of its effectiveness.
              </Typography>
              <Rating
                name="product-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={author.image} sx={{ width: 50, height: 50, mr: 1 }} />
                <Typography variant="body1" component="div" sx={{ cursor: 'pointer' }} onClick={handleClickOpen}>
                  {author.name}
                </Typography>
              </Box>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Price: $19.99
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ className: classes.blurBackground }}
      >
        <DialogTitle>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={author.image} sx={{ width: 80, height: 80, mr: 2 }} />
      <Typography variant="h6" component="div">
        {author.name}
      </Typography>
    </Box>
    <IconButton aria-label="close" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  </Box>
</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {author.bio}
            <br />
            <a href={author.link} target="_blank" rel="noopener noreferrer">
              Visit {author.name}'s website
            </a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ProductDetails;