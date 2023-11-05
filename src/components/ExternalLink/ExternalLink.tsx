import PropTypes from "prop-types";

export type ExternalLinkProps = {
  baseUrl: string,
  id: string,
  symbol: string,
}

const ExternalLink = ({ baseUrl, id, symbol }: ExternalLinkProps) => {
  const parsedUrl = `${baseUrl}/${id}`;
  return (
    <a href={parsedUrl} target="_blank">
      {symbol}
    </a>
  );
};

ExternalLink.propTypes = {
  baseUrl: PropTypes.string,
  id: PropTypes.string,
  symbol: PropTypes.string,
};

export default ExternalLink;
