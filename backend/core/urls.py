from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from authentication.views import RegisterView
from kanban.views import BoardViewSet, ListViewSet, CardViewSet

router = DefaultRouter()
router.register(r"boards", BoardViewSet, basename="board")
router.register(r"lists", ListViewSet, basename="list")
router.register(r"cards", CardViewSet, basename="card")

urlpatterns = [
    path("admin/", admin.site.urls),
    # Auth
    path("api/auth/register/", RegisterView.as_view(), name="auth_register"),
    path("api/auth/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # Kanban API
    path("api/", include(router.urls)),
]
