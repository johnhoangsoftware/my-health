import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Community from "./Tabs/Community";
import PostDetail from "./Post/PostDetail";
import NewPost from "./Post/NewPost";

const Stack = createStackNavigator();
export default function CommunityStack() {
    return (
        <Stack.Navigator initialRoutName="Cộng đồng">
            <Stack.Screen
                name="Cộng đồng "
                component={Community}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Post Detail"
                component={PostDetail}
                options={{ headerShown: false }}
                
            />
            <Stack.Screen
                name="New Post"
                component={NewPost}
                options={{ headerShown: false }}
                
            />
        </Stack.Navigator>
    )
}