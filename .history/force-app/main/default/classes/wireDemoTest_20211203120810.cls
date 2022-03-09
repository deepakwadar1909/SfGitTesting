public class wireDemoClass {

    @AuraEnabled(cacheable = true)
    
    public static List<LWC_Topic__c> getTopicList(){
        List<LWC_Topic__c> topicDetails = [Select Id, Name from LWC_Topic__c];
        system.debug('Topic Details :' + topicDetails);
        return topicDetails;
    }
}