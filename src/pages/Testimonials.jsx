import React from 'react';
import { Grid, Container, Typography, Card, CardContent, CardActions, Button, Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Testimonials() {
  const testimonials = [
    {
      text: '"This book changed my life! Highly recommended."',
      author: 'Jane Doe',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      text: '"A must-read for anyone looking to improve their life."',
      author: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      text: '"I was skeptical at first, but this book really works!"',
      author: 'Emily Chen',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      text: '"This book is a game-changer. I highly recommend it!"',
      author: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      text: '"I loved this book! It\'s a must-read for anyone looking to improve their life."',
      author: 'Sarah Lee',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      text: '"This book is amazing! It has changed my life in so many ways."',
      author: 'David Kim',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      text: '"I was blown away by the insights in this book. Highly recommended!"',
      author: 'Lisa Nguyen',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      text: '"This book is a treasure trove of wisdom. I highly recommend it!"',
      author: 'Kevin White',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      text: '"I loved this book! It\'s a must-read for anyone looking to improve their life."',
      author: 'Jessica Hall',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4, textAlign: 'center', marginLeft: "20px"}}>
      
      <Grid container spacing={8}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <CardContent>
                <Avatar src={testimonial.image} sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }} />
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  {testimonial.text}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  - {testimonial.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
