import React,{Component} from "react";
import {Session} from "@zz-dev/fuhrparkjsrest"
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {NotificationDistributor} from "@zz-dev/fuhrparkjsrest";

export class NotificationsTest extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            notifications:[]
        }
    }


    componentDidMount() {
        // var socket = new SockJS('https://fuhrparkapi.zz-dev.de/notifications/socket?access_token='+Session.tokenStore.getAccessToken());
        // this.stompClient = Stomp.over(socket);
        // this.stompClient.connect({}, frame=> {
        //     console.log('Connected: ' + frame);
        //     this.stompClient.subscribe('/user/manu/notifications', notification=> {
        //         let oldNotifications=this.state.notifications;
        //         console.log(oldNotifications);
        //         oldNotifications.push(notification.body);
        //         console.log(oldNotifications);
        //         this.setState({notifications:oldNotifications});
        //         console.log("notifications");
        //     });
        // });
        NotificationDistributor.subscribe("manu",(notification)=>{
            let oldNotifications=this.state.notifications;
                    console.log(oldNotifications);
                    oldNotifications.push(notification.body);
                    console.log(oldNotifications);
                    this.setState({notifications:oldNotifications});
                    console.log("notifications");
        })

    }

    componentWillUnmount() {
        // if (this.stompClient !== null) {
        //     this.stompClient.disconnect();
        // }
        // console.log("Disconnected");
    }

    render() {
        return (<ul>
            {this.state.notifications.map(n=>(<li>{n}</li>))}
        </ul>);
    }
}