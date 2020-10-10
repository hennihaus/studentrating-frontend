import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  LocalDate: Date;
  LocalDateTime: string;
};



export enum Campus {
  FURTWANGEN = 'Furtwangen',
  TUTTLINGEN = 'Tuttlingen',
  VILLINGEN_SCHWENNINGEN = 'Villingen Schwenningen'
}

export enum Day {
  MONDAY = 'Montag',
  THUESDAY = 'Dienstag',
  WEDNESDAY = 'Mittwoch',
  THURSDAY = 'Donnerstag',
  FRIDAY = 'Freitag'
}

export enum Faculty {
  WI = 'Wirtschaftsinformatik',
  AIN = 'Informatik',
  MIB = 'Medieninformatik'
}



export type Mutation = {
  __typename?: 'Mutation';
  deleteProfBy?: Maybe<Scalars['ID']>;
  createReview?: Maybe<Review>;
};


export type MutationDeleteProfByArgs = {
  id: Scalars['ID'];
};


export type MutationCreateReviewArgs = {
  review?: Maybe<ReviewWrapper>;
};

export type Professor = {
  __typename?: 'Professor';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Title>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  faculty?: Maybe<Faculty>;
  jobStart?: Maybe<Scalars['LocalDate']>;
  averageRating?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  talkingTimes?: Maybe<Array<Maybe<TalkingTime>>>;
  subjects?: Maybe<Array<Maybe<Subject>>>;
  thumbnails?: Maybe<Array<Maybe<Thumbnail>>>;
};

export type Query = {
  __typename?: 'Query';
  getAllProfs?: Maybe<Array<Maybe<Professor>>>;
  getAllProfsSearch?: Maybe<Array<Maybe<Professor>>>;
  getProfById?: Maybe<Professor>;
  getProfBySubjectId?: Maybe<Professor>;
  getProfsBy?: Maybe<Array<Maybe<Professor>>>;
  getAllSubjects?: Maybe<Array<Maybe<Subject>>>;
  getSubjectById?: Maybe<Subject>;
  getReviewById?: Maybe<Review>;
};


export type QueryGetAllProfsArgs = {
  sortDirection: SortDirection;
};


export type QueryGetAllProfsSearchArgs = {
  searchTerm?: Maybe<Scalars['String']>;
};


export type QueryGetProfByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProfBySubjectIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProfsByArgs = {
  jobStartEarlierThan: Scalars['LocalDate'];
  lastName: Scalars['String'];
  faculty: Faculty;
};


export type QueryGetSubjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetReviewByIdArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['LocalDate']>;
};

export type ReviewWrapper = {
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Subject = {
  __typename?: 'Subject';
  id?: Maybe<Scalars['ID']>;
  semester?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['LocalDate']>;
  to?: Maybe<Scalars['LocalDate']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type TalkingTime = {
  __typename?: 'TalkingTime';
  campus?: Maybe<Campus>;
  room?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['LocalDateTime']>;
  endTime?: Maybe<Scalars['LocalDateTime']>;
  day?: Maybe<Day>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum Title {
  PROF = 'Prof.',
  PROF_DR = 'Prof. Dr.',
  DR = 'Dr.',
  PROF_DR_ING = 'Prof. Dr. Ing.'
}

export type ProfFragment = (
  { __typename?: 'Professor' }
  & Pick<Professor, 'id' | 'title' | 'firstName' | 'lastName' | 'faculty'>
);

export type SubjectFragment = (
  { __typename?: 'Subject' }
  & Pick<Subject, 'id' | 'name' | 'from' | 'to'>
);

export type ThumbnailFragment = (
  { __typename?: 'Professor' }
  & { thumbnails?: Maybe<Array<Maybe<(
    { __typename?: 'Thumbnail' }
    & Pick<Thumbnail, 'url'>
  )>>> }
);

export type ReviewFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id' | 'rating' | 'title' | 'text' | 'published'>
);

export type TalkingTimeFragment = (
  { __typename?: 'Professor' }
  & { talkingTimes?: Maybe<Array<Maybe<(
    { __typename?: 'TalkingTime' }
    & Pick<TalkingTime, 'campus' | 'room' | 'startTime' | 'endTime' | 'day'>
  )>>> }
);

export type GetProfsQueryVariables = {};


export type GetProfsQuery = (
  { __typename?: 'Query' }
  & { getAllProfs?: Maybe<Array<Maybe<(
    { __typename?: 'Professor' }
    & { subjects?: Maybe<Array<Maybe<(
      { __typename?: 'Subject' }
      & Pick<Subject, 'semester'>
      & SubjectFragment
    )>>> }
    & ProfFragment
    & ThumbnailFragment
  )>>> }
);

export type GetAllProfsSearchQueryVariables = {
  searchTerm?: Maybe<Scalars['String']>;
};


export type GetAllProfsSearchQuery = (
  { __typename?: 'Query' }
  & { getAllProfsSearch?: Maybe<Array<Maybe<(
    { __typename?: 'Professor' }
    & ProfFragment
  )>>> }
);

export type GetProfByIdQueryVariables = {
  id: Scalars['ID'];
};


export type GetProfByIdQuery = (
  { __typename?: 'Query' }
  & { getProfById?: Maybe<(
    { __typename?: 'Professor' }
    & Pick<Professor, 'phoneNumber' | 'email' | 'jobStart' | 'averageRating'>
    & { subjects?: Maybe<Array<Maybe<(
      { __typename?: 'Subject' }
      & SubjectFragment
    )>>> }
    & ProfFragment
    & ThumbnailFragment
    & TalkingTimeFragment
  )> }
);

export type GetProfBySubjectIdQueryVariables = {
  id: Scalars['ID'];
};


export type GetProfBySubjectIdQuery = (
  { __typename?: 'Query' }
  & { getProfBySubjectId?: Maybe<(
    { __typename?: 'Professor' }
    & { subjects?: Maybe<Array<Maybe<(
      { __typename?: 'Subject' }
      & Pick<Subject, 'semester'>
      & { reviews?: Maybe<Array<Maybe<(
        { __typename?: 'Review' }
        & ReviewFragment
      )>>> }
      & SubjectFragment
    )>>> }
    & ProfFragment
    & ThumbnailFragment
    & TalkingTimeFragment
  )> }
);

export type DeleteProfByIdMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProfByIdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProfBy'>
);

export type CreateReviewMutationVariables = {
  review?: Maybe<ReviewWrapper>;
};


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview?: Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )> }
);

export type GetReviewByIdQueryVariables = {
  id: Scalars['ID'];
};


export type GetReviewByIdQuery = (
  { __typename?: 'Query' }
  & { getReviewById?: Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )> }
);

export type GetAllSubjectsQueryVariables = {};


export type GetAllSubjectsQuery = (
  { __typename?: 'Query' }
  & { getAllSubjects?: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & SubjectFragment
  )>>> }
);

export const ProfFragmentDoc = gql`
    fragment prof on Professor {
  id
  title
  firstName
  lastName
  faculty
}
    `;
export const SubjectFragmentDoc = gql`
    fragment subject on Subject {
  id
  name
  from
  to
}
    `;
export const ThumbnailFragmentDoc = gql`
    fragment thumbnail on Professor {
  thumbnails {
    url
  }
}
    `;
export const ReviewFragmentDoc = gql`
    fragment review on Review {
  id
  rating
  title
  text
  published
}
    `;
export const TalkingTimeFragmentDoc = gql`
    fragment talkingTime on Professor {
  talkingTimes {
    campus
    room
    startTime
    endTime
    day
  }
}
    `;
export const GetProfsDocument = gql`
    query getProfs {
  getAllProfs(sortDirection: ASC) {
    subjects {
      semester
      ...subject
    }
    ...prof
    ...thumbnail
  }
}
    ${SubjectFragmentDoc}
${ProfFragmentDoc}
${ThumbnailFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfsGQL extends Apollo.Query<GetProfsQuery, GetProfsQueryVariables> {
    document = GetProfsDocument;
    
  }
export const GetAllProfsSearchDocument = gql`
    query getAllProfsSearch($searchTerm: String) {
  getAllProfsSearch(searchTerm: $searchTerm) {
    ...prof
  }
}
    ${ProfFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllProfsSearchGQL extends Apollo.Query<GetAllProfsSearchQuery, GetAllProfsSearchQueryVariables> {
    document = GetAllProfsSearchDocument;
    
  }
export const GetProfByIdDocument = gql`
    query getProfById($id: ID!) {
  getProfById(id: $id) {
    phoneNumber
    email
    jobStart
    averageRating
    subjects {
      ...subject
    }
    ...prof
    ...thumbnail
    ...talkingTime
  }
}
    ${SubjectFragmentDoc}
${ProfFragmentDoc}
${ThumbnailFragmentDoc}
${TalkingTimeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfByIdGQL extends Apollo.Query<GetProfByIdQuery, GetProfByIdQueryVariables> {
    document = GetProfByIdDocument;
    
  }
export const GetProfBySubjectIdDocument = gql`
    query getProfBySubjectId($id: ID!) {
  getProfBySubjectId(id: $id) {
    subjects {
      semester
      ...subject
      reviews {
        ...review
      }
    }
    ...prof
    ...thumbnail
    ...talkingTime
  }
}
    ${SubjectFragmentDoc}
${ReviewFragmentDoc}
${ProfFragmentDoc}
${ThumbnailFragmentDoc}
${TalkingTimeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfBySubjectIdGQL extends Apollo.Query<GetProfBySubjectIdQuery, GetProfBySubjectIdQueryVariables> {
    document = GetProfBySubjectIdDocument;
    
  }
export const DeleteProfByIdDocument = gql`
    mutation deleteProfById($id: ID!) {
  deleteProfBy(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteProfByIdGQL extends Apollo.Mutation<DeleteProfByIdMutation, DeleteProfByIdMutationVariables> {
    document = DeleteProfByIdDocument;
    
  }
export const CreateReviewDocument = gql`
    mutation createReview($review: ReviewWrapper) {
  createReview(review: $review) {
    ...review
  }
}
    ${ReviewFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateReviewGQL extends Apollo.Mutation<CreateReviewMutation, CreateReviewMutationVariables> {
    document = CreateReviewDocument;
    
  }
export const GetReviewByIdDocument = gql`
    query getReviewById($id: ID!) {
  getReviewById(id: $id) {
    ...review
  }
}
    ${ReviewFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetReviewByIdGQL extends Apollo.Query<GetReviewByIdQuery, GetReviewByIdQueryVariables> {
    document = GetReviewByIdDocument;
    
  }
export const GetAllSubjectsDocument = gql`
    query getAllSubjects {
  getAllSubjects {
    ...subject
  }
}
    ${SubjectFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllSubjectsGQL extends Apollo.Query<GetAllSubjectsQuery, GetAllSubjectsQueryVariables> {
    document = GetAllSubjectsDocument;
    
  }