import { gql } from "@apollo/client";

const DISEASE_QUERY = gql`
  query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      associatedTargets(page: { index: 0, size: 25 }) {
        rows {
          target {
            id
            approvedSymbol
            approvedName
          }
          score
          datatypeScores {
            id
            score
          }
        }
      }
    }
  }
`;

export { DISEASE_QUERY };
