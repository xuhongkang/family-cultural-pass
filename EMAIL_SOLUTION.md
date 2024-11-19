# Email Delivery Solutions: Research and Comparison

## Options Under Consideration

### 1. Firestore Email Trigger Extension
- **Description:**
  - Simplifies email workflows by integrating Firestore storage and email sending.
  - Designates an "email collection" in Firestore where adding a document triggers email delivery automatically.
  - Combines data storage and email sending into a single workflow.

- **Strengths:**
  - Native integration with Firebase.
  - Easy to configure for real-time triggering using Firestore writes.
  - Offloads SMTP setup and basic operations.

- **Weaknesses:**
  - Limited flexibility for batch operations (best suited for real-time email sending).
  - Minimal support for analytics and subscription/unsubscribe workflows.
  - Requires an SMTP server configuration, adding potential maintenance overhead.

- **Questions/Considerations:**
  - Does the team have the SMTP credentials or need to procure them?
  - How will unsubscribe functionality be handled?
  - Is the lack of advanced analytics a deal-breaker?

---

### 2. Postmark
- **Description:**
  - A transactional email service with a strong focus on integrations and ease of use.
  - Already integrated with existing Drupal endpoints, simplifying template deployment and token-based API usage.

- **Strengths:**
  - No need for SMTP credentials or server maintenance.
  - Robust integration capabilities with APIs.
  - Reliable deliverability with focus on transactional emails.
  - Well-documented deployment for templates and endpoints.

- **Weaknesses:**
  - No native support for advanced subscription management or unsubscribe handling.
  - Dependency on external systems for managing analytics and user data.

- **Questions/Considerations:**
  - What is the effort required to configure and deploy templates via existing integrations?
  - Can the analytics gap be addressed through custom integrations?

---

### 3. Subscription-Based Services (e.g., Upaknee, Twilio SendGrid)
- **Description:**
  - Platforms designed for bulk email delivery with built-in analytics, subscription management, and advanced features like unsubscribe interfaces.
  - Store data and provide endpoints or webhooks to synchronize updates with external systems.

- **Strengths:**
  - Comprehensive analytics and reporting tools.
  - Built-in unsubscribe workflows and interfaces.
  - Scalable for large batches of emails.
  - Shorter development time compared to Firestore and Postmark.

- **Weaknesses:**
  - Requires SMTP credentials for setup.
  - Storing data outside Firestore creates potential issues with synchronicity and monitoring.
  - Requires additional effort to integrate webhooks for updates back into Firestore.

- **Questions/Considerations:**
  - Are webhooks practical for a Cloud Function-based architecture?
  - How challenging is the setup for bidirectional data sync between the subscription service and Firestore?
  - What are the costs compared to Firestore and Postmark?

---

## Comparison Table

| Feature/Criteria           | Firestore Email Extension        | Postmark                    | Upaknee/Twilio              |
|----------------------------|----------------------------------|-----------------------------|-----------------------------|
| **SMTP Setup**             | Required                        | Not required                | Required                    |
| **Real-Time Triggering**   | Supported                       | Requires API integration    | Supported                   |
| **Batch Operations**       | Limited                         | Supported                   | Supported                   |
| **Analytics**              | Minimal                         | Requires custom setup       | Comprehensive               |
| **Subscription Management**| None                            | Requires external handling  | Built-in                    |
| **Unsubscribe Interface**  | Manual implementation required  | Requires external handling  | Built-in                    |
| **Scalability**            | Moderate                        | High                        | High                        |
| **Synchronicity**          | Native                          | API dependent               | Requires webhooks           |
| **Ease of Integration**    | Easy (Firestore-native)         | Medium (API integration)    | Medium (Webhook integration)|
| **Development Time**       | Longer                          | Moderate                    | Shorter                     |
| **Cost**                   | Firebase billing                | Subscription-based          | Subscription-based          |

---

## Key Considerations

1. **SMTP Server Credentials:**
   - Firestore Email Trigger and Upaknee/Twilio require SMTP credentials. If these aren’t readily available, time and effort will be needed to configure or procure a service.

2. **Integration Complexity:**
   - Postmark benefits from existing Drupal integrations, reducing the need for complex configurations.
   - Subscription services introduce additional complexities due to external data storage and the need for webhook-based synchronizations.

3. **Analytics and Unsubscribe Management:**
   - Firestore and Postmark are limited in this area.
   - Subscription services excel but require careful handling of synchronicity and monitoring.
