import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", mt: 15}}>
      {/* Hero Section */}
      <Typography variant="h2" fontWeight="bold" gutterBottom color="black">
        Wavelength
      </Typography>
      <Typography variant="h5" color="black" gutterBottom>
        How well do you know your friends?
      </Typography>

      {/* Cards Section (Using Flexbox) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          mt: 5,
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} className="bg-black bg-opacity-30" sx={{ width: 400, height: 400 , boxShadow: 3}}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" className="opacity-100 text-black">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <div className="flex flex-col items-center">
      <Button sx={{ mt: 5, width: 500, height: 100 }} variant="contained" color="primary" className="bg-black bg-opacity-30 text-black text-xl font-bold">
        Create A Game
      </Button>
      <Button sx={{ mt: 5, width: 500, height: 100 }} variant="contained" color="primary" className="bg-black bg-opacity-30 text-black text-xl font-bold">
        Join A Game
      </Button> 
      </div>
    </Container>
  );
};

// Card Data
const cards = [
  {
    title: "Make A Room",
    description: "",
    image: "https://source.unsplash.com/400x300/?technology",
  },
  {
    title: "Invite Your Friends",
    description: "",
    image: "https://source.unsplash.com/400x300/?people",
  },
  {
    title: "Test How Alike You Think",
    description: "",
    image: "https://source.unsplash.com/400x300/?learning",
  },
];

export default Home;
