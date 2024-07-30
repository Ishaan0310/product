
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Paper, Box } from '@mui/material';

function FAQ() {
  const faqs = [
    {
      question: 'What is "The Secret"?',
      answer: 'A: "The Secret" is a book that guides you through the principles of the Law of Attraction.',
    },
    {
      question: 'What is the Law of Attraction?',
      answer: 'A: The Law of Attraction is a universal principle that states that like attracts like, and that by focusing on positive thoughts and emotions, you can attract positive experiences into your life.',
    },
    {
      question: 'How does "The Secret" work?',
      answer: 'A: "The Secret" provides a step-by-step guide on how to apply the Law of Attraction in your life, including how to set intentions, visualize your goals, and overcome obstacles.',
    },
    // Add more FAQs here
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 600, color: 'black', paddingBottom: "60px", justifyitems: 'center' }}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={4}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} md={8} key={index} >
            <Paper elevation={3} sx={{ p: 2, borderRadius: 10 }}>
              <Accordion sx={{ boxShadow: 'none' }}>
                <AccordionSummary >
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#333' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingBottom: "90px"}}>
                  <Typography variant="body2" sx={{ color: '#666'}}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FAQ;