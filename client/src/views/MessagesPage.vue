<template>
    <div>
        <Nav></Nav>
        <NavRequestFriend />
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import NavRequestFriend from "../components/NavRequestFriend.vue";

export default {
    components: {
        Nav,
        NavRequestFriend
    }
}
</script>