/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SEND_EMAIL_TO_FRIEND = gql`
  mutation sendEmailToFriend(
    $id: Int!
    $recipients: [SendEmailToFriendRecipientInput]!
    $sender: SendEmailToFriendSenderInput!
  ) {
    sendEmailToFriend(
      input: { product_id: $id, recipients: $recipients, sender: $sender }
    ) {
      sender {
        email
        message
        name
      }
    }
  }
`
