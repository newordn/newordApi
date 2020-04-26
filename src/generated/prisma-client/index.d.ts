// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  conversation: (where?: ConversationWhereInput) => Promise<boolean>;
  message: (where?: MessageWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  conversation: (
    where: ConversationWhereUniqueInput
  ) => ConversationNullablePromise;
  conversations: (args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Conversation>;
  conversationsConnection: (args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ConversationConnectionPromise;
  message: (where: MessageWhereUniqueInput) => MessageNullablePromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createConversation: (data: ConversationCreateInput) => ConversationPromise;
  updateConversation: (args: {
    data: ConversationUpdateInput;
    where: ConversationWhereUniqueInput;
  }) => ConversationPromise;
  upsertConversation: (args: {
    where: ConversationWhereUniqueInput;
    create: ConversationCreateInput;
    update: ConversationUpdateInput;
  }) => ConversationPromise;
  deleteConversation: (
    where: ConversationWhereUniqueInput
  ) => ConversationPromise;
  deleteManyConversations: (
    where?: ConversationWhereInput
  ) => BatchPayloadPromise;
  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (args: {
    data: MessageUpdateInput;
    where: MessageWhereUniqueInput;
  }) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  upsertMessage: (args: {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  }) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  conversation: (
    where?: ConversationSubscriptionWhereInput
  ) => ConversationSubscriptionPayloadSubscription;
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "content_ASC"
  | "content_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type ConversationOrderByInput = "id_ASC" | "id_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ConversationUpdateInput {
  author?: Maybe<UserUpdateOneWithoutConversationInput>;
  messages?: Maybe<MessageUpdateManyWithoutConversationInput>;
}

export type ConversationWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MessageUpdateManyWithoutAuthorInput {
  create?: Maybe<
    MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  >;
  delete?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  connect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  set?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  disconnect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  update?: Maybe<
    | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
    | MessageUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
    | MessageUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<MessageScalarWhereInput[] | MessageScalarWhereInput>;
  updateMany?: Maybe<
    | MessageUpdateManyWithWhereNestedInput[]
    | MessageUpdateManyWithWhereNestedInput
  >;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  conversation?: Maybe<ConversationWhereInput>;
  messages_every?: Maybe<MessageWhereInput>;
  messages_some?: Maybe<MessageWhereInput>;
  messages_none?: Maybe<MessageWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface ConversationCreateOneWithoutMessagesInput {
  create?: Maybe<ConversationCreateWithoutMessagesInput>;
  connect?: Maybe<ConversationWhereUniqueInput>;
}

export interface MessageUpdateWithoutConversationDataInput {
  content?: Maybe<String>;
  author?: Maybe<UserUpdateOneWithoutMessagesInput>;
}

export interface ConversationCreateWithoutMessagesInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneWithoutConversationInput>;
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutAuthorDataInput;
}

export interface MessageCreateManyWithoutConversationInput {
  create?: Maybe<
    | MessageCreateWithoutConversationInput[]
    | MessageCreateWithoutConversationInput
  >;
  connect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MessageWhereInput>;
  AND?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  OR?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  NOT?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
}

export interface MessageCreateWithoutConversationInput {
  id?: Maybe<ID_Input>;
  content: String;
  author?: Maybe<UserCreateOneWithoutMessagesInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface UserCreateOneWithoutMessagesInput {
  create?: Maybe<UserCreateWithoutMessagesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  conversation?: Maybe<ConversationCreateOneWithoutAuthorInput>;
  messages?: Maybe<MessageCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutMessagesInput {
  id?: Maybe<ID_Input>;
  name: String;
  conversation?: Maybe<ConversationCreateOneWithoutAuthorInput>;
}

export interface MessageUpdateInput {
  content?: Maybe<String>;
  author?: Maybe<UserUpdateOneWithoutMessagesInput>;
  conversation?: Maybe<ConversationUpdateOneWithoutMessagesInput>;
}

export interface ConversationCreateOneWithoutAuthorInput {
  create?: Maybe<ConversationCreateWithoutAuthorInput>;
  connect?: Maybe<ConversationWhereUniqueInput>;
}

export interface MessageCreateInput {
  id?: Maybe<ID_Input>;
  content: String;
  author?: Maybe<UserCreateOneWithoutMessagesInput>;
  conversation?: Maybe<ConversationCreateOneWithoutMessagesInput>;
}

export interface ConversationCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  messages?: Maybe<MessageCreateManyWithoutConversationInput>;
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput;
  create: UserCreateWithoutMessagesInput;
}

export interface UserUpdateOneWithoutMessagesInput {
  create?: Maybe<UserCreateWithoutMessagesInput>;
  update?: Maybe<UserUpdateWithoutMessagesDataInput>;
  upsert?: Maybe<UserUpsertWithoutMessagesInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ConversationUpsertWithoutAuthorInput {
  update: ConversationUpdateWithoutAuthorDataInput;
  create: ConversationCreateWithoutAuthorInput;
}

export interface UserUpdateOneWithoutConversationInput {
  create?: Maybe<UserCreateWithoutConversationInput>;
  update?: Maybe<UserUpdateWithoutConversationDataInput>;
  upsert?: Maybe<UserUpsertWithoutConversationInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ConversationUpdateOneWithoutAuthorInput {
  create?: Maybe<ConversationCreateWithoutAuthorInput>;
  update?: Maybe<ConversationUpdateWithoutAuthorDataInput>;
  upsert?: Maybe<ConversationUpsertWithoutAuthorInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ConversationWhereUniqueInput>;
}

export interface UserUpdateWithoutConversationDataInput {
  name?: Maybe<String>;
  messages?: Maybe<MessageUpdateManyWithoutAuthorInput>;
}

export interface UserCreateOneWithoutConversationInput {
  create?: Maybe<UserCreateWithoutConversationInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ConversationWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  author?: Maybe<UserWhereInput>;
  messages_every?: Maybe<MessageWhereInput>;
  messages_some?: Maybe<MessageWhereInput>;
  messages_none?: Maybe<MessageWhereInput>;
  AND?: Maybe<ConversationWhereInput[] | ConversationWhereInput>;
  OR?: Maybe<ConversationWhereInput[] | ConversationWhereInput>;
  NOT?: Maybe<ConversationWhereInput[] | ConversationWhereInput>;
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: Maybe<
    MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  >;
  connect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
}

export interface MessageWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  author?: Maybe<UserWhereInput>;
  conversation?: Maybe<ConversationWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  OR?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  NOT?: Maybe<MessageWhereInput[] | MessageWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface MessageUpdateWithoutAuthorDataInput {
  content?: Maybe<String>;
  conversation?: Maybe<ConversationUpdateOneWithoutMessagesInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  conversation?: Maybe<ConversationUpdateOneWithoutAuthorInput>;
  messages?: Maybe<MessageUpdateManyWithoutAuthorInput>;
}

export interface ConversationUpdateOneWithoutMessagesInput {
  create?: Maybe<ConversationCreateWithoutMessagesInput>;
  update?: Maybe<ConversationUpdateWithoutMessagesDataInput>;
  upsert?: Maybe<ConversationUpsertWithoutMessagesInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ConversationWhereUniqueInput>;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ConversationUpdateWithoutMessagesDataInput {
  author?: Maybe<UserUpdateOneWithoutConversationInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface ConversationUpsertWithoutMessagesInput {
  update: ConversationUpdateWithoutMessagesDataInput;
  create: ConversationCreateWithoutMessagesInput;
}

export interface UserUpdateWithoutMessagesDataInput {
  name?: Maybe<String>;
  conversation?: Maybe<ConversationUpdateOneWithoutAuthorInput>;
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutAuthorDataInput;
  create: MessageCreateWithoutAuthorInput;
}

export interface UserCreateWithoutConversationInput {
  id?: Maybe<ID_Input>;
  name: String;
  messages?: Maybe<MessageCreateManyWithoutAuthorInput>;
}

export interface MessageScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<MessageScalarWhereInput[] | MessageScalarWhereInput>;
  OR?: Maybe<MessageScalarWhereInput[] | MessageScalarWhereInput>;
  NOT?: Maybe<MessageScalarWhereInput[] | MessageScalarWhereInput>;
}

export interface ConversationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ConversationWhereInput>;
  AND?: Maybe<
    ConversationSubscriptionWhereInput[] | ConversationSubscriptionWhereInput
  >;
  OR?: Maybe<
    ConversationSubscriptionWhereInput[] | ConversationSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ConversationSubscriptionWhereInput[] | ConversationSubscriptionWhereInput
  >;
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
}

export interface MessageUpsertWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutConversationDataInput;
  create: MessageCreateWithoutConversationInput;
}

export interface MessageUpdateWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutConversationDataInput;
}

export interface MessageUpdateManyWithoutConversationInput {
  create?: Maybe<
    | MessageCreateWithoutConversationInput[]
    | MessageCreateWithoutConversationInput
  >;
  delete?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  connect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  set?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  disconnect?: Maybe<MessageWhereUniqueInput[] | MessageWhereUniqueInput>;
  update?: Maybe<
    | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    | MessageUpdateWithWhereUniqueWithoutConversationInput
  >;
  upsert?: Maybe<
    | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    | MessageUpsertWithWhereUniqueWithoutConversationInput
  >;
  deleteMany?: Maybe<MessageScalarWhereInput[] | MessageScalarWhereInput>;
  updateMany?: Maybe<
    | MessageUpdateManyWithWhereNestedInput[]
    | MessageUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpsertWithoutConversationInput {
  update: UserUpdateWithoutConversationDataInput;
  create: UserCreateWithoutConversationInput;
}

export interface MessageUpdateManyDataInput {
  content?: Maybe<String>;
}

export interface ConversationUpdateWithoutAuthorDataInput {
  messages?: Maybe<MessageUpdateManyWithoutConversationInput>;
}

export interface MessageUpdateManyMutationInput {
  content?: Maybe<String>;
}

export interface MessageCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  content: String;
  conversation?: Maybe<ConversationCreateOneWithoutMessagesInput>;
}

export interface ConversationCreateInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneWithoutConversationInput>;
  messages?: Maybe<MessageCreateManyWithoutConversationInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ConversationEdge {
  node: Conversation;
  cursor: String;
}

export interface ConversationEdgePromise
  extends Promise<ConversationEdge>,
    Fragmentable {
  node: <T = ConversationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ConversationEdgeSubscription
  extends Promise<AsyncIterator<ConversationEdge>>,
    Fragmentable {
  node: <T = ConversationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ConversationConnection {
  pageInfo: PageInfo;
  edges: ConversationEdge[];
}

export interface ConversationConnectionPromise
  extends Promise<ConversationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ConversationEdge>>() => T;
  aggregate: <T = AggregateConversationPromise>() => T;
}

export interface ConversationConnectionSubscription
  extends Promise<AsyncIterator<ConversationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ConversationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateConversationSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MessagePreviousValues {
  id: ID_Output;
  content: String;
  createdAt: DateTimeOutput;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  content: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface Message {
  id: ID_Output;
  content: String;
  createdAt: DateTimeOutput;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  author: <T = UserPromise>() => T;
  conversation: <T = ConversationPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  content: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  conversation: <T = ConversationSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface MessageNullablePromise
  extends Promise<Message | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  author: <T = UserPromise>() => T;
  conversation: <T = ConversationPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ConversationPreviousValues {
  id: ID_Output;
}

export interface ConversationPreviousValuesPromise
  extends Promise<ConversationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface ConversationPreviousValuesSubscription
  extends Promise<AsyncIterator<ConversationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface ConversationSubscriptionPayload {
  mutation: MutationType;
  node: Conversation;
  updatedFields: String[];
  previousValues: ConversationPreviousValues;
}

export interface ConversationSubscriptionPayloadPromise
  extends Promise<ConversationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ConversationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ConversationPreviousValuesPromise>() => T;
}

export interface ConversationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ConversationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ConversationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ConversationPreviousValuesSubscription>() => T;
}

export interface Conversation {
  id: ID_Output;
}

export interface ConversationPromise
  extends Promise<Conversation>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  messages: <T = FragmentableArray<Message>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ConversationSubscription
  extends Promise<AsyncIterator<Conversation>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: <T = UserSubscription>() => T;
  messages: <T = Promise<AsyncIterator<MessageSubscription>>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ConversationNullablePromise
  extends Promise<Conversation | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  messages: <T = FragmentableArray<Message>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AggregateConversation {
  count: Int;
}

export interface AggregateConversationPromise
  extends Promise<AggregateConversation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateConversationSubscription
  extends Promise<AsyncIterator<AggregateConversation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  conversation: <T = ConversationPromise>() => T;
  messages: <T = FragmentableArray<Message>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  conversation: <T = ConversationSubscription>() => T;
  messages: <T = Promise<AsyncIterator<MessageSubscription>>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  conversation: <T = ConversationPromise>() => T;
  messages: <T = FragmentableArray<Message>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Conversation",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
