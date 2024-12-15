import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Item {
  id: number;
  title: string;
}
interface BasicCardProps {
  item: Item;
  onClick: (id: number) => void;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BasicCard: React.FC<BasicCardProps> = ({ item, onClick }) => {
  const { id, title } = item;

  return (
    <Card
      sx={{ minWidth: 275, margin: 6 }}
      key={id}
      onClick={() => onClick(id)}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Song content
        </Typography>
        <Typography variant="body2">Description</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Download</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
