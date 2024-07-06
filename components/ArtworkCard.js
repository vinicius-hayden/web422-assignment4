import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import useSWR from 'swr';
import Error from 'next/error';

const fetcher = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function ArtworkCard({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`,
    fetcher
  );

  if (error) return <Error statusCode={error.status} />;
  if (!data) return null;

  const {
    primaryImageSmall = 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]',
    title = 'N/A',
    objectDate = 'N/A',
    classification = 'N/A',
    medium = 'N/A'
  } = data;

  return (
    <Card>
      <Card.Img variant="top" src={primaryImageSmall} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {objectDate}<br />
          <strong>Classification:</strong> {classification}<br />
          <strong>Medium:</strong> {medium}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref legacyBehavior>
          <Button variant="primary">View {objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
