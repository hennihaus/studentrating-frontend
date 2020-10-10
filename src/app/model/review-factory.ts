import { ReviewWrapper } from './graphql-types';

export class ReviewFactory {

  static empty(): ReviewWrapper {
    return {
      id: '',
      rating: null,
      title: '',
      text: '',
    };
  }
}
