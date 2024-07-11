import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
  } from "@chakra-ui/react";
  import useGenres from "../Hooks/useGenres";
  import getCroppedImageUrl from "../services/image-url";
  
  const GenreList = ({ selectedGenre, onSelectGenre }) => {
    const { data, loading, error } = useGenres();
  
    if (error) return null; // Returning null or some fallback for error handling
    if (loading) return <Spinner />;
  
    return (
      <>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                  objectFit="cover"
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="lg"
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
  };
  
  export default GenreList;
  